(function () {
  var form = document.getElementById("form-cita");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var nombre = d.get("nombre") || "";
    var telefono = d.get("telefono") || "";
    var email = d.get("email") || "";
    var motivo = d.get("motivo") || "Cita previa";
    var mensaje = d.get("mensaje") || "";
    var body = encodeURIComponent(
      "Nombre: " + nombre + "\nTeléfono: " + telefono + "\nEmail: " + email + "\nMotivo: " + motivo + "\n\n" + mensaje
    );
    var subject = encodeURIComponent("Cita previa — " + motivo + " — " + nombre);
    window.location.href = "mailto:me@miriameguianutricion.com?subject=" + subject + "&body=" + body;
    var ok = document.getElementById("form-ok");
    if (ok) ok.hidden = false;
  });
})();
