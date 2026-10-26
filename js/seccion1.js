   // 1. Votación con switch
        function votarZonas() {
            let zona = document.getElementById('selectZona').value;
            switch (zona) {
                case 'norte':
                    document.getElementById('resVoto').innerText = "¡Gracias por votar en la sección NORTE!";
                    break;
                case 'sur':
                    document.getElementById('resVoto').innerText = "¡Gracias por votar en la sección SUR!";
                    break;
                case 'centro':
                    document.getElementById('resVoto').innerText = "¡Gracias por votar en la sección CENTRO!";
                    break;
                default:
                    document.getElementById('resVoto').innerText = "Sección no válida.";
            }
        }

        // 2. Suma positivos interactiva
        let sumaTotal = 0;
        function agregarNumero() {
            let val = parseFloat(document.getElementById('inputPositivo').value);
            if (isNaN(val)) return;
            if (val <= 0) {
                alert("Has introducido un número cero o negativo. Pulsa 'Finalizar y Ver Suma'.");
                return;
            }
            sumaTotal += val;
            document.getElementById('resSuma').innerText = "Suma acumulada actual: " + sumaTotal;
            document.getElementById('inputPositivo').value = "";
            document.getElementById('inputPositivo').focus();
        }
        function finalizarSuma() {
            document.getElementById('resSuma').innerText = "La suma total final es: " + sumaTotal;
            sumaTotal = 0; // Reiniciar
        }

        // 3. Ordenar 3 números
        function ordenarNumeros() {
            let n1 = parseFloat(document.getElementById('num1').value);
            let n2 = parseFloat(document.getElementById('num2').value);
            let n3 = parseFloat(document.getElementById('num3').value);
            if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
                document.getElementById('resOrden').innerText = "Por favor ingresa los 3 números.";
                return;
            }
            let arr = [n1, n2, n3].sort((a, b) => b - a);
            document.getElementById('resOrden').innerText = "De mayor a menor: " + arr.join(", ");
        }

        // 4. Importe neto
        function calcularImporte() {
            let bruto = parseFloat(document.getElementById('inputBruto').value);
            if (isNaN(bruto)) return;
            let neto = bruto > 15000 ? bruto * 1.16 : bruto * 1.10;
            let impuestoAplicado = bruto > 15000 ? "16%" : "10%";
            document.getElementById('resImporte').innerText = `Importe neto (con ${impuestoAplicado} de impuesto): $` + neto.toFixed(2);
        }

        // 5. Sueldo con base en antigüedad
        function calcularSueldo() {
            let anos = parseInt(document.getElementById('inputAnos').value);
            if (isNaN(anos) || anos < 0) return;
            let base = 40000, aumento = 0;
            if (anos > 10) aumento = 0.10;
            else if (anos > 5) aumento = 0.07;
            else if (anos > 3) aumento = 0.05;
            else aumento = 0.03;

            let total = base + (base * aumento);
            document.getElementById('resSueldo').innerText = `Antigüedad: ${anos} años | Aumento: ${aumento * 100}% | Sueldo total: €${total.toFixed(2)}`;
        }