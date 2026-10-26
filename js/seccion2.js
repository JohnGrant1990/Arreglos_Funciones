// 1. Suma impares del 1 al 100 usando el ciclo WHILE
        function sumarImparesWhile() {
            let suma = 0;
            let i = 1; // Inicializador
            
            while (i <= 100) {
                suma += i;
                i += 2; // Incrementa de 2 en 2 para asegurar que sean impares
            }
            
            document.getElementById('resImpares').innerText = "Suma total (While): " + suma;
        }

        // 2. Mostrar asteriscos usando el ciclo WHILE
        function mostrarAsteriscosWhile() {
            let n = parseInt(document.getElementById('inputAsteriscos').value);
            if (isNaN(n) || n <= 0) {
                document.getElementById('resAsteriscos').innerText = "Ingresa un número válido.";
                return;
            }
            
            let ast = "";
            let contador = 0;
            
            while (contador < n) {
                ast += "*";
                contador++;
            }
            
            document.getElementById('resAsteriscos').innerText = ast;
        }

        // 3. Tablas de multiplicar del 1 al 10 usando ciclos FOR
        function verTablasFor() {
            let contenedor = document.getElementById('resTablas');
            contenedor.innerHTML = "";
            
            for (let i = 1; i <= 10; i++) {
                let p = document.createElement('p');
                let texto = `<strong>Tabla del ${i}</strong><br>`;
                
                for (let j = 1; j <= 10; j++) {
                    texto += `${i} x ${j} = ${i * j}<br>`;
                }
                
                p.innerHTML = texto;
                contenedor.appendChild(p);
            }
        }