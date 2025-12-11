# 💍 Calculadora de Gastos - Matrimonio

Una aplicación web visual e interactiva para gestionar y calcular todos los gastos de tu matrimonio.

## Características

- ✅ **Presupuesto modificable**: Establece y modifica tu presupuesto total (por defecto: $7.000.000 CLP)
- ✅ **Gestión de items**: Agrega, edita y elimina items de gastos
- ✅ **Sistema de abonos**: Registra pagos parciales para cada item
- ✅ **Visualización clara**: 
  - Resumen financiero completo
  - Barra de progreso del presupuesto usado
  - Indicadores visuales de lo que falta por pagar
  - Presupuesto restante destacado
- ✅ **Persistencia de datos**: Los datos se guardan automáticamente en tu navegador
- ✅ **Diseño moderno y responsivo**: Funciona perfectamente en computadoras y móviles

## Cómo usar

1. Abre el archivo `index.html` en tu navegador web
2. **Establecer presupuesto**: El presupuesto inicial es de $7.000.000 CLP. Puedes modificarlo haciendo clic en "Actualizar Presupuesto"
3. **Agregar items**: 
   - Completa el formulario con el nombre del item
   - Ingresa el precio total
   - Si ya realizaste un abono, ingrésalo (opcional)
   - Haz clic en "Agregar Item"
4. **Editar items**: Haz clic en el botón "Editar" de cualquier item para modificarlo
5. **Eliminar items**: Haz clic en el botón "Eliminar" si necesitas quitar un item

## Información mostrada

- **Presupuesto Total**: Tu presupuesto establecido
- **Total Gastado**: Suma de todos los abonos realizados
- **Total Pendiente**: Suma de lo que falta por pagar en todos los items
- **Presupuesto Restante**: Lo que te queda disponible después de los abonos
- **Barra de progreso**: Muestra visualmente qué porcentaje del presupuesto has usado

## Notas

- Los datos se guardan automáticamente en el almacenamiento local de tu navegador
- La barra de progreso cambia de color según el porcentaje usado:
  - Azul/Morado: Menos del 70%
  - Naranja: Entre 70% y 90%
  - Rojo: Más del 90%
- Si el presupuesto restante es negativo, se mostrará en rojo

¡Disfruta planificando tu matrimonio! 💒

## 🚀 Despliegue

Este proyecto está listo para desplegarse en Vercel. Consulta `GUIA_DEPLOY.md` para instrucciones detalladas paso a paso.

### Despliegue rápido en Vercel:

1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente la configuración
3. Haz clic en "Deploy" y ¡listo!

El proyecto incluye `vercel.json` configurado para servir archivos estáticos correctamente.
