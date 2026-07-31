# La Biblia Nos Habla — Versión 6 (lista para Git)

## Lo que ya funciona
- Sitio principal adaptable a teléfonos y computadoras.
- Horarios y direcciones de Philadelphia y Garfield.
- Cobertura ministerial con Pastor General Rev. Rodolfo Solórzano y Pastora Masiel Solórzano.
- Galería de misiones en Cobán y Lanquín.
- Evento Culto Misionero del 7 de agosto de 2026.
- Estudio bíblico de los jueves, 8:00–9:00 p.m., por WhatsApp.
- Zona “Primeros Pasos con Jesús”.
- Estudio completo de los 21 capítulos del Evangelio de Juan.
- Progreso guardado en el dispositivo.
- Formularios de oración y preguntas al pastor.
- Respuesta automática por correo mediante FormSubmit.
- Diseño de Diezmos, Ofrendas, Misiones y Benevolencia.
- Plantilla Excel para registrar contribuciones y obtener reportes mensuales.

## Activar formularios de correo
Después de publicar:
1. Envíe una petición de prueba.
2. FormSubmit enviará un correo de activación a Labiblianoshablapodcast@gmail.com.
3. Abra ese mensaje y confirme.
4. Desde ese momento los formularios enviarán correos y respuestas automáticas.

## Conectar WhatsApp
Abra `config.js` y pegue el enlace del grupo o videollamada:
`whatsappStudyLink: "AQUI-EL-ENLACE"`

## Conectar pagos seguros
No publique números de cuenta bancaria en GitHub.
Seleccione una plataforma segura y pegue sus enlaces en `config.js`:
- titheLink
- offeringLink
- missionsLink
- benevolenceLink

## Subir a GitHub
Suba a la raíz:
- index.html
- principiantes.html
- dar.html
- styles.css
- script.js
- beginners.js
- giving.js
- config.js
- chapters.json
- README.md
- carpeta assets
- Registro_de_Diezmos_y_Ofrendas.xlsx

Vercel detectará el cambio y publicará automáticamente.
