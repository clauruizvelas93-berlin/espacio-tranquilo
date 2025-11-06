# Respiro - Una aplicación para la calma

Esta es una aplicación web simple y minimalista diseñada para ayudar en momentos de ansiedad. La aplicación presenta una imagen de atardecer inmersiva y un sonido relajante para crear un ambiente de calma.

## ¿Cómo usar?

1.  Abre el archivo `index.html` en tu navegador web. La aplicación mostrará un carrusel de imágenes de atardeceres.
2.  Haz clic en el botón "Reproducir Sonido" para escuchar el sonido relajante.
3.  Para detener el sonido, haz clic en el botón "Pausar Sonido".

## Personalización

### Reemplazar las imágenes del carrusel

Las imágenes utilizadas en el carrusel se encuentran en la carpeta `fotos-1`. Puedes reemplazarlas con tus propias imágenes. Asegúrate de que los nombres de archivo sigan el formato `foto-1.jpg`, `foto-2.jpg`, etc.

### Reemplazar el sonido

1.  Busca un sonido relajante que te guste. Puedes usar sitios web como [Freesound](https://freesound.org/) para encontrar sonidos de uso libre.
2.  Guarda el archivo de sonido en la misma carpeta que el archivo `index.html`.
3.  Abre el archivo `index.html` en un editor de texto.
4.  Busca la siguiente línea de código:

    ```html
    <audio id="calm-sound" src="https://freesound.org/people/Guillermo_de_La_Matera/sounds/800519/"></audio>
    ```

5.  Reemplaza la URL en el atributo `src` con el nombre de tu archivo de sonido. Por ejemplo, si tu sonido se llama `mi-sonido.mp3`, la línea de código debería verse así:

    ```html
    <audio id="calm-sound" src="mi-sonido.mp3"></audio>
    ```
