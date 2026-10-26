// Arreglo inicial de 10 países
        let paises = ["México", "España", "Argentina", "Japón", "Canadá", "Brasil", "Francia", "Italia", "Alemania", "Australia"];

        // Mostrar lista inicial al cargar la página
        function actualizarListas() {
            let listaOrig = document.getElementById('listaOriginal');
            listaOrig.innerHTML = "";
            paises.forEach(pais => {
                let li = document.createElement('li');
                li.className = "list-group-item";
                li.innerText = pais;
                listaOrig.appendChild(li);
            });
        }
        window.onload = actualizarListas;

        // Agregar país a la lista
        function agregarPais() {
            let input = document.getElementById('nuevoPais');
            let val = input.value.trim();
            if (val === "") return;
            paises.push(val);
            input.value = "";
            actualizarListas();
        }

        // Ordenar con sort() e imprimir en pantalla
        function ordenarPaises() {
            let paisesOrdenados = [...paises];
            paisesOrdenados.sort();

            let lista = document.getElementById('listaPaises');
            lista.innerHTML = "";
            paisesOrdenados.forEach(pais => {
                let li = document.createElement('li');
                li.className = "list-group-item";
                li.innerText = pais;
                lista.appendChild(li);
            });
        }

        // Sección IV: Mostrar y ocultar formulario de login en pantalla
        function toggleLogin() {
            let form = document.getElementById('loginForm');
            form.style.display = (form.style.display === "block") ? "none" : "block";
        }

        function simularLogin() {
            let email = document.getElementById('emailInput').value;
            let pass = document.getElementById('passInput').value;
            if(email === "" || pass === "") {
                document.getElementById('resLogin').innerText = "Por favor completa los campos.";
                return;
            }
            document.getElementById('resLogin').innerText = "¡Inicio de sesión exitoso para " + email + "!";
        }