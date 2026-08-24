# Perfil corporativo

Documento de presentación de capacidades, construido con Next.js 16, React 19 y
Tailwind CSS 4. La marca candidata es **ARQELYS**, todavía en evaluación: aparece
siempre acompañada de «Identidad en evaluación» hasta completar la verificación
de registro marcario y dominios. El símbolo está diseñado para funcionar con
cualquier nombre, de modo que un cambio no obliga a rehacer nada.

## Ejecutar

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción
npm start        # servir el build
npm run export   # genera out/ como sitio 100% estático
```

`npm run export` produce una carpeta `out/` que se puede subir a cualquier
hosting. Debe servirse desde la **raíz** del sitio: los enlaces internos (por
ejemplo `/marca`) son absolutos, así que abrir `index.html` directamente con
`file://` o publicarla en un subdirectorio deja ese enlace roto.

### Abrir el sitio desde otra máquina de la red

En desarrollo, Next bloquea las peticiones a `/_next/` que no vengan de
`localhost`. Si se abre `http://<ip-del-servidor>:3000` sin autorizar ese
origen, los chunks de JavaScript quedan bloqueados y React no hidrata.

Para permitirlo, agregar la IP en `allowedDevOrigins` dentro de
[`next.config.ts`](next.config.ts) y reiniciar `npm run dev`:

```ts
allowedDevOrigins: ["185.147.159.88", "otra.ip.aqui"],
```

El síntoma en el log del servidor es:

```
⚠ Blocked cross-origin request to Next.js dev resource /_next/static/chunks/…
```

Esto afecta solo a `next dev`. En `npm start` y en `npm run export` no ocurre.

### El contenido no depende del JavaScript

La animación de entrada está condicionada a la clase `js` que agrega un script
en `<head>`. Ese mismo script la retira si React no alcanza a hidratar, y cada
`Reveal` tiene además un respaldo por tiempo. Resultado: aunque el JavaScript
falle por completo, el documento se lee entero. Es deliberado — este perfil se
va a abrir en máquinas ajenas, se va a exportar a estático y se va a imprimir
a PDF.

## Dónde se edita el contenido

**Todo el texto vive en un solo archivo: [`lib/content.ts`](lib/content.ts).**
No hace falta tocar los componentes para personalizar el documento.

| Qué cambiar | Dónde |
| --- | --- |
| Nombre de la marca | `brand.name` |
| Titular y bajada de portada | `hero` |
| Cifras de compromiso | `commitments` |
| Las cuatro divisiones | `divisions` |
| Las cinco etapas del método | `method` |
| Las seis garantías | `assurances` |
| Tecnologías | `stack` |
| Casos de éxito | `cases` |
| Perfiles del equipo | `team` |
| Datos de contacto | `contact` |

Los marcadores entre corchetes — `[ ASÍ ]` — señalan datos pendientes.

### Publicar un caso

Cada entrada de `cases` es una tarjeta. Mientras `status` sea `"reserved"`
se muestra un marco vacío con la estructura del caso a la vista. Para publicarlo:

1. Copiar la imagen a `public/img/` (por ejemplo `public/img/caso-taller.jpg`).
2. Completar los campos y cambiar el estado:

```ts
{
  id: "caso-1",
  status: "delivered",          // "delivered" | "prototype" | "reserved"
  sector: "Taller mecánico",
  title: "Sistema de órdenes de trabajo",
  problem: "Las órdenes se anotaban en cuaderno y se perdía el 20% de los repuestos.",
  solution: "Sistema web de órdenes, inventario y facturación, con acceso desde el taller.",
  stack: ["Next.js", "PostgreSQL", "Docker"],
  result: "Cierre de órdenes 3 veces más rápido y quiebre de stock eliminado.",
  image: "/img/caso-taller.jpg",
}
```

**Importante:** usar `"delivered"` solo para sistemas realmente entregados y en
operación. Para trabajos de arquitectura, propuesta o prototipo, usar
`"prototype"`. La distinción es deliberada y protege la credibilidad del
documento.

## Identidad de marca

`/marca` presenta tres direcciones de símbolo (Vértice, Enlace, Escala), la
paleta y la tipografía, para poder decidir la identidad definitiva.

Los tres símbolos están en [`components/Logo.tsx`](components/Logo.tsx) como SVG
originales. Para cambiar el símbolo activo, editar el componente `Logo` y usar
`MarkEnlace` o `MarkEscala` en lugar de `MarkVertice`.

Estado actual: `brand.name` = `"ARQELYS"` y `brand.status` = `"Identidad en
evaluación"`. El lockup, el pie y la página `/marca` leen ambos valores, así que
para cambiar el nombre basta editar `brand` en `lib/content.ts`.

Antes de registrar la marca hay que cerrar la verificación que documenta la
propia página `/marca`: registro marcario, dominios, denominaciones
empresariales, redes sociales y conflictos con empresas del mismo sector.

## Sistema de diseño

Dirección: **claro, cálido y con color**. Base blanca cálida, bloques de color
plano entre secciones para dar ritmo, y una sola familia tipográfica moderna.

Tres reglas:

1. **Color plano, nunca degradado.** El ritmo lo dan bloques de sección de un
   solo tono (azul, arena, menta, durazno). Ningún degradado en toda la página.
2. **Un acento por bloque.** El azul marca la acción, el naranja el segundo
   énfasis y el verde las confirmaciones. Cada uno aparece poco.
3. **La foto va en marco, nunca detrás del texto.** Así la imagen se ve completa
   y el texto no pelea por legibilidad.

Tokens en [`app/globals.css`](app/globals.css), dentro de `@theme`.

| Token | Valor | Uso |
| --- | --- | --- |
| `canvas` | `#FBFAF8` | Fondo principal, blanco cálido |
| `paper` | `#FFFFFF` | Tarjetas |
| `ink` | `#16150F` | Titulares y texto |
| `ink-2` | `#56534C` | Párrafos |
| `ink-3` | `#8B8781` | Etiquetas |
| `brand` | `#2B4FE0` | Acción, énfasis, enlaces |
| `accent` | `#E9662E` | Segundo énfasis |
| `green` | `#17795C` | Confirmaciones y garantías |
| `block-blue` / `block-sand` / `block-mint` / `block-warm` | `#EDF1FE` / `#F4F1EA` / `#EAF4EF` / `#FDF0E8` | Fondos de sección |

| Clase | Para qué sirve |
| --- | --- |
| `.h1` `.h2` `.h3` | Escala de titulares |
| `.mark` / `.mark-warm` | Una palabra en color de marca. Sustituye al degradado. |
| `.label` | Etiqueta monoespaciada con punto de color |
| `.card` / `.card-lift` | Tarjeta blanca; `-lift` añade elevación al pasar el cursor |
| `.btn` `.btn-primary` `.btn-ghost` `.btn-light` | Botones |
| `.frame` | Marco redondeado para fotografía |

Tipografía: **Plus Jakarta Sans** para todo (geométrica humanista, con carácter
propio y lejos de la Inter por defecto) y **Geist Mono** solo en etiquetas.

## Estructura de la página

Pensada para que el cliente encuentre lo que busca sin scroll a ciegas:

1. **Portada** — qué hacemos, en una frase, con foto y llamada a la acción
2. **Compromisos** — cuatro cifras verificables
3. **Qué hacemos** — cuatro áreas, cada una en su bloque de color
4. **Cómo lo vemos** — el problema típico del cliente, con foto
5. **Método** — cinco etapas en tarjetas horizontales
6. **Garantías** — seis reglas que quedan por escrito
7. **Casos** — espacios reservados, con la estructura a la vista
8. **Capacidad técnica** — el stack agrupado
9. **Equipo** — dos responsables
10. **Preguntas frecuentes** — acordeón con las seis dudas más comunes
11. **Contacto** — bloque azul con los datos

Las preguntas frecuentes son deliberadas: resuelven precio, plazo, propiedad del
sistema y soporte sin que el cliente tenga que escribir un correo.

## Fotografía

Las imágenes de `public/img/` provienen de Unsplash y se usan bajo la
Unsplash License (uso comercial permitido, sin atribución obligatoria).

**Criterio:** fotografía luminosa, cálida y con personas. Nada de rascacielos ni
abstracciones tecnológicas. Cada imagen tiene que poder explicarse en una frase.

| Archivo | Dónde se usa | Qué dice | Autor |
| --- | --- | --- | --- |
| `sesion.jpg` | Portada | Revisar la solución junto al cliente | Vitaly Gariev |
| `cliente.jpg` | "Cómo lo vemos" | El problema: pedidos en una libreta de papel | Vitaly Gariev |

Al reemplazar una foto: luz natural, personas reales, tono cálido. Evitar
rótulos, logotipos o marcas de empresas reales visibles, para no sugerir una
relación comercial que no existe.
