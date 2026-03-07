# Правила синхронизации GitHub → cPanel (FTP)

> Файл для настройки автоматического деплоя на cPanel через GitHub Actions.  
> Скопируйте в проект и настройте секцию «Параметры проекта» — затем AI или вы сможете по этим правилам создать workflow.

---

## 1. Параметры проекта (заполните для каждого проекта)

```yaml
# Ветка, при push в которую запускается деплой
deploy_branch: main

# Команда сборки (для статики/SPA — npm run build и т.п.)
build_command: npm run build:no-snap

# Папка с готовым сайтом после сборки (относительно корня репо)
output_dir: dist/

# FTP-хост
ftp_server: ftp.ilat.info

# Путь на сервере (см. примечания ниже)
# Варианты:
#   - "./" — в корень FTP (если у аккаунта Directory = папка сайта)
#   - "public_html/" — в подпапку public_html внутри FTP root
ftp_server_dir: ./
```

### Важно про server-dir

- У cPanel FTP-аккаунта есть **Directory** — начальная папка при входе.
- В workflow указываем путь **относительно** этой папки.
- Для деплоя в корень сайта: в cPanel задайте FTP Directory = `/home/USER/domain.com`, тогда `server-dir: ./` зальёт файлы туда.
- **Не** указывайте полный путь вида `/home/ilatinfo/...` — он создаст вложенные папки.

---

## 2. GitHub Secrets (создать в Settings → Secrets and variables → Actions)

| Name | Secret | Описание |
|------|--------|----------|
| FTP_SERVER | `ftp.ilat.info` | Хост FTP (или ваш домен) |
| FTP_USERNAME | `user@domain.com` | Полный логин FTP из cPanel |
| FTP_PASSWORD | `пароль` | Пароль FTP |
| FTP_SERVER_DIR | (опционально) | Путь относительно FTP root, напр. `./` или `public_html/` |

**Важно:** В полях GitHub вводите только имя и значение, без `=`, скобок и пояснений.

---

## 3. Структура workflow `.github/workflows/deploy.yml`

```yaml
name: Deploy to cPanel (FTP)

on:
  push:
    branches:
      - main   # deploy_branch
  workflow_dispatch: {}

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build:no-snap   # build_command

      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.6
        with:
          server: ${{ secrets.FTP_SERVER || 'ftp.ilat.info' }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          protocol: ftp
          local-dir: dist/           # output_dir
          server-dir: ${{ secrets.FTP_SERVER_DIR || './' }}
```

---

## 4. Адаптация под тип проекта

### Статический HTML (без сборки)
- `build_command`: удалить шаги "Setup Node", "Install dependencies", "Build"
- `output_dir`: `./` (корень репо) или папка с готовыми файлами

### Node/React/Vue (с npm build)
- `build_command`: `npm run build` или `npm run build:no-snap`
- `output_dir`: `dist/` (Vite) или `build/` (CRA)

### PHP
- Обычно без сборки: `output_dir: ./`
- Может потребоваться исключить папки: `.git`, `node_modules` и т.п. (FTP-Deploy-Action поддерживает `exclude`)

---

## 5. Чеклист настройки (для AI или человека)

1. [ ] Создать `.github/workflows/deploy.yml` по шаблону выше
2. [ ] Подставить `deploy_branch`, `build_command`, `output_dir`, `ftp_server`, `server-dir`
3. [ ] Добавить GitHub Secrets: FTP_SERVER, FTP_USERNAME, FTP_PASSWORD
4. [ ] В cPanel: FTP-аккаунт с Directory = папка сайта
5. [ ] Закоммитить и запушить workflow
6. [ ] Перезапустить workflow вручную или сделать push для проверки

---

## 6. Распространённые ошибки

| Ошибка | Причина | Решение |
|--------|---------|---------|
| `Input required: server` | FTP_SERVER пустой или не создан | Добавить Secret `FTP_SERVER` (без `=`, только значение) |
| `Input required: username` | FTP_USERNAME неверно указан | В Name — `FTP_USERNAME`, в Secret — логин (без лишнего текста) |
| Файлы в `exam.ilat.info/deploy/home/ilatinfo/...` | server-dir указан как абсолютный путь | Использовать `./` и правильный Directory в cPanel FTP |
| `Unable to resolve action @v4` | Нет тега v4 | Использовать `SamKirkland/FTP-Deploy-Action@v4.3.6` |
