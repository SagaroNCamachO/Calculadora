# 🚀 Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar tu calculadora de gastos en Vercel paso a paso.

## ✅ Paso 1: Verificar que el código está en GitHub

Tu código ya está subido a GitHub en el repositorio: `SagaroNCamachO/Calculadora`

Puedes verificar visitando: `https://github.com/SagaroNCamachO/Calculadora`

## 📦 Paso 2: Crear cuenta en Vercel (si no tienes una)

1. Ve a [https://vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"** o **"Iniciar sesión"**
3. Elige **"Continue with GitHub"** para conectar tu cuenta de GitHub
4. Autoriza a Vercel para acceder a tus repositorios

## 🔗 Paso 3: Conectar el repositorio con Vercel

1. Una vez dentro de Vercel, haz clic en **"Add New..."** → **"Project"**
2. En la lista de repositorios, busca y selecciona **"Calculadora"**
3. Si no aparece, haz clic en **"Adjust GitHub App Permissions"** y asegúrate de dar acceso al repositorio

## ⚙️ Paso 4: Configurar el proyecto

Vercel detectará automáticamente que es un proyecto estático. La configuración debería ser:

- **Framework Preset**: Otro (o Static Site)
- **Root Directory**: `./` (dejar por defecto)
- **Build Command**: (dejar vacío, no es necesario)
- **Output Directory**: (dejar vacío, no es necesario)

**No necesitas cambiar nada**, solo haz clic en **"Deploy"**

## 🎉 Paso 5: ¡Listo!

Vercel desplegará tu aplicación automáticamente. En unos segundos:

1. Verás un mensaje de "Deployment successful"
2. Obtendrás una URL única como: `calculadora-xxxxx.vercel.app`
3. Tu aplicación estará disponible en internet

## 🔄 Paso 6: Actualizaciones automáticas

Cada vez que hagas `git push` a tu repositorio, Vercel desplegará automáticamente los cambios.

## 📝 Configuración personalizada (Opcional)

Si quieres un dominio personalizado:

1. Ve a tu proyecto en Vercel
2. Haz clic en **"Settings"** → **"Domains"**
3. Agrega tu dominio personalizado

## 🐛 Solución de problemas

### Si el despliegue falla:
- Verifica que todos los archivos estén en GitHub
- Asegúrate de que `index.html` esté en la raíz del proyecto
- Revisa los logs de despliegue en Vercel

### Si la página no carga correctamente:
- Verifica que `vercel.json` esté en el repositorio
- Asegúrate de que los archivos CSS y JS estén referenciados correctamente en `index.html`

## ✨ ¡Listo para usar!

Tu calculadora de gastos estará disponible en internet y podrás acceder a ella desde cualquier dispositivo.

