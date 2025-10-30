document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const seccion = e.target.dataset.seccion;
      cargarSeccion(seccion);

      localStorage.setItem("ultimaSeccion", seccion);
    });
  });

  const seccionGuardada = localStorage.getItem("ultimaSeccion") || "Inicio";
  cargarSeccion(seccionGuardada);
});

function cargarSeccion(seccion) {
  const main = document.getElementById("contenido-principal");

  switch (seccion) {
    case "Inicio":
      main.innerHTML = `
        <section class="hero">
          <h2>Bienvenido a GameVault</h2>
          <p>Descubre, comparte y disfruta los mejores juegos indie creados por la comunidad.</p>
          <a href="#" class="btn" id="explorar-btn">Explorar juegos</a>
        </section>

        <section class="featured">
          <h3>Proyectos destacados</h3>
          <div class="projects">
            <div class="project-card">
              <img src="img/terraria.jpg" alt="Terraria">
              <h4>Proyecto 1: Terraria</h4>
              <p>Juego de exploración y construcción pixel art.</p>
              <a href="#" class="btn-small">Ver más</a>
            </div>
            <div class="project-card">
              <img src="img/rdr2.jpg" alt="Red Dead Redemption 2">
              <h4>Proyecto 2: Red Dead Redemption 2</h4>
              <p>Aventura épica en el salvaje oeste.</p>
              <a href="#" class="btn-small">Ver más</a>
            </div>
            <div class="project-card">
              <img src="img/cs2.jpg" alt="Counter-Strike 2">
              <h4>Proyecto 3: Counter-Strike 2</h4>
              <p>El clásico shooter competitivo con gráficos actualizados.</p>
              <a href="#" class="btn-small">Ver más</a>
            </div>
          </div>
        </section>
      `;
      break;

    case "Explorar":
      main.innerHTML = `
        <section class="featured">
          <h3>Explorar Juegos</h3>
          <div style="text-align:center;margin-bottom:15px;">
            <select id="filtro-categoria" class="btn-small">
              <option value="todos">Todas las categorías</option>
              <option value="accion">Acción</option>
              <option value="aventura">Aventura</option>
              <option value="rpg">RPG</option>
              <option value="simulacion">Simulación</option>
            </select>
          </div>

          <div class="projects" id="lista-juegos">
            <div class="project-card" data-cat="accion">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg" alt="Dead by Daylight">
              <h4>Dead by Daylight</h4>
              <p>Horror multijugador 4v1.</p>
            </div>
            <div class="project-card" data-cat="rpg">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg" alt="Hollow Knight">
              <h4>Hollow Knight</h4>
              <p>Aventura de acción metroidvania.</p>
            </div>
            <div class="project-card" data-cat="simulacion">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/394360/header.jpg" alt="Hearts of Iron IV">
              <h4>Hearts of Iron IV</h4>
              <p>Simulación de estrategia militar.</p>
            </div>
          </div>
        </section>
      `;
      const filtro = document.getElementById("filtro-categoria");
      filtro.addEventListener("change", e => {
        const valor = e.target.value;
        document.querySelectorAll(".project-card").forEach(card => {
          if (valor === "todos" || card.dataset.cat === valor) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
      break;
    case "Comunidad":
      main.innerHTML = `
        <section class="featured">
          <h3>Comunidad GameVault</h3>
          <p style="text-align:center;color:#ccc;">Publica tus ideas, proyectos o comparte capturas de tus juegos.</p>
          
          <div style="max-width:500px;margin:20px auto;text-align:center;">
            <textarea id="post-text" placeholder="¿Qué estás pensando?" style="width:100%;height:80px;border-radius:8px;padding:10px;"></textarea>
            <br>
            <button id="publicar-btn" class="btn-small">Publicar</button>
          </div>

          <div id="muro-posts" style="max-width:600px;margin:auto;">
            <!-- Aquí se insertan las publicaciones -->
          </div>
        </section>
      `;

      const btnPublicar = document.getElementById("publicar-btn");
      const muro = document.getElementById("muro-posts");

      const cargarPosts = () => {
        muro.innerHTML = "";
        const posts = JSON.parse(localStorage.getItem("posts") || "[]");
        posts.forEach((texto, i) => {
          const div = document.createElement("div");
          div.classList.add("project-card");
          div.innerHTML = `<p>${texto}</p><small style="color:#888;">Post #${i + 1}</small>`;
          muro.prepend(div);
        });
      };

      btnPublicar.addEventListener("click", () => {
        const texto = document.getElementById("post-text").value.trim();
        if (texto) {
          const posts = JSON.parse(localStorage.getItem("posts") || "[]");
          posts.push(texto);
          localStorage.setItem("posts", JSON.stringify(posts));
          document.getElementById("post-text").value = "";
          cargarPosts();
        }
      });

      cargarPosts();
      break;

    case "Perfil":
      main.innerHTML = `
        <section class="featured">
          <h3>Tu Perfil</h3>
          <div class="project-card" style="max-width:400px;margin:auto;text-align:center;">
            <img id="avatar-img" src="${localStorage.getItem("avatarImg") || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}" 
                 alt="Avatar perfil" style="width:120px;height:120px;border-radius:50%;">
            <h4>Usuario: Juan</h4>
            <p>Nivel 12 | 34 juegos subidos</p>
            <p>Miembro desde 2025</p>
            <input type="file" id="file-input" accept="image/*" style="display:none;">
            <a href="#" class="btn-small" id="editar-btn">Editar Perfil</a>
          </div>
        </section>
      `;

      // 🔸 Lógica del avatar
      const editarBtn = document.getElementById("editar-btn");
      const fileInput = document.getElementById("file-input");
      const avatarImg = document.getElementById("avatar-img");

      editarBtn.addEventListener("click", e => {
        e.preventDefault();
        fileInput.click();
      });

      fileInput.addEventListener("change", event => {
        const archivo = event.target.files[0];
        if (archivo) {
          const lector = new FileReader();
          lector.onload = e => {
            const dataURL = e.target.result;
            avatarImg.src = dataURL;
            localStorage.setItem("avatarImg", dataURL);
          };
          lector.readAsDataURL(archivo);
        }
      });
      break;
  }
}