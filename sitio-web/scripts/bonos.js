(function () {
  var CONDITIONS = [
    "Válido para consultas de nutrición médica con la Dra. Miriam Eguía Llosa.",
    "Es necesario pedir cita previa por teléfono, WhatsApp o correo.",
    "Validez de 12 meses desde la fecha de emisión, salvo pacto distinto en consulta.",
    "Las sesiones no utilizadas no son reembolsables. El bono puede regalarse.",
    "Centro sanitario registrado en Cantabria. Atención presencial en Santander.",
  ];
  var META = {
    5: {
      title: "Bono 5 sesiones",
      subtitle: "Para empezar y consolidar el cambio con calma.",
    },
    10: {
      title: "Bono 10 sesiones",
      subtitle: "Acompañamiento completo, con tiempo para asentar resultados.",
    },
  };

  function today() {
    var d = new Date();
    var dd = String(d.getDate()).padStart(2, "0");
    var mm = String(d.getMonth() + 1).padStart(2, "0");
    return dd + "/" + mm + "/" + d.getFullYear();
  }

  function cardHtml(kind, face, fields) {
    var light = kind === 5;
    var paper = light ? "imagenes/paper-cream.jpg" : "imagenes/paper-sage.jpg";
    var logo = light ? "imagenes/logo.png" : "imagenes/logo-blanco.png";
    var dark = light ? "" : " is-dark";
    var para = fields.para || "________________";
    var de = fields.de || "________________";
    var msg = fields.mensaje
      ? "«" + fields.mensaje + "»"
      : "Un acompañamiento personalizado para cuidar la salud.";
    var meta =
      "39004 Santander, Cantabria · 648 125 035" +
      (fields.fecha ? " · " + fields.fecha : "") +
      (fields.codigo ? " · " + fields.codigo : "");
    var dots = "";
    for (var i = 1; i <= kind; i++) dots += '<li class="v-dot">' + i + "</li>";
    var conditions = CONDITIONS.map(function (line) {
      return "<li>· " + line + "</li>";
    }).join("");

    if (face === "front") {
      return (
        '<article class="voucher-card' +
        dark +
        '">' +
        '<img class="v-paper" src="' +
        paper +
        '" alt="">' +
        '<div class="v-wash ' +
        (light ? "v-wash-light" : "v-wash-dark") +
        '"></div>' +
        '<div class="v-ring"></div><div class="v-ring-inner"></div>' +
        '<div class="v-frame">' +
        '<header class="v-top">' +
        '<img class="v-logo" src="' +
        logo +
        '" alt="Miriam Eguía Nutrición">' +
        '<p class="v-kicker">Bono regalo</p></header>' +
        '<div class="v-mid"><div>' +
        '<p class="v-num">' +
        kind +
        "</p>" +
        '<p class="v-title">sesiones de nutrición médica</p>' +
        '<p class="v-msg">' +
        msg +
        "</p></div>" +
        '<div class="v-emblem"><img src="imagenes/corazon.svg" alt=""></div></div>' +
        '<footer class="v-bot"><div class="v-who">' +
        "<p><span class=\"v-label\">Para</span><span class=\"v-script\">" +
        para +
        "</span></p>" +
        "<p><span class=\"v-label\">De</span><span class=\"v-script\">" +
        de +
        "</span></p></div>" +
        '<p class="v-meta">' +
        meta +
        "</p></footer></div></article>"
      );
    }
    return (
      '<article class="voucher-card' +
      dark +
      '">' +
      '<img class="v-paper" src="' +
      paper +
      '" alt="">' +
      '<div class="v-wash ' +
      (light ? "v-wash-light" : "v-wash-dark") +
      '"></div>' +
      '<div class="v-ring"></div><div class="v-ring-inner"></div>' +
      '<div class="v-frame">' +
      '<header class="v-top"><div>' +
      '<p class="v-title" style="margin-top:0">' +
      kind +
      " sesiones · reverso</p>" +
      '<p class="v-kicker">Miriam Eguía Nutrición</p></div>' +
      '<div class="v-emblem" style="height:4.6em;width:4.6em"><img src="imagenes/corazon.svg" alt=""></div></header>' +
      '<div class="v-back-grid"><ul class="v-conditions">' +
      conditions +
      "</ul><div>" +
      '<p class="v-label" style="margin-bottom:.6em">Control de sesiones</p>' +
      '<ul class="v-dots">' +
      dots +
      "</ul></div></div>" +
      '<footer class="v-bot">' +
      '<p class="v-meta">Dra. Miriam Eguía Llosa<br>Centro registrado Nº 06/2025/04344</p>' +
      '<p class="v-meta">me@miriameguianutricion.com<br>miriameguianutricion.com</p>' +
      "</footer></div></article>"
    );
  }

  var kind = 5;
  var face = "front";
  var fields = { para: "", de: "", mensaje: "", fecha: today(), codigo: "ME-5-" + (1000 + Math.floor(Math.random() * 9000)) };

  var preview = document.getElementById("preview");
  var printFront = document.getElementById("print-front");
  var printBack = document.getElementById("print-back");
  var capFront = document.getElementById("cap-front");
  var capBack = document.getElementById("cap-back");
  var title = document.getElementById("bono-title");
  var subtitle = document.getElementById("bono-sub");
  var err = document.getElementById("bono-error");

  function render() {
    fields.codigo = fields.codigo.replace(/ME-\d+-/, "ME-" + kind + "-");
    preview.innerHTML = cardHtml(kind, face, fields);
    printFront.innerHTML = cardHtml(kind, "front", fields);
    printBack.innerHTML = cardHtml(kind, "back", fields);
    capFront.innerHTML = cardHtml(kind, "front", fields);
    capBack.innerHTML = cardHtml(kind, "back", fields);
    title.textContent = META[kind].title;
    subtitle.textContent = META[kind].subtitle;
    document.querySelectorAll("[data-kind]").forEach(function (b) {
      b.classList.toggle("is-on", Number(b.getAttribute("data-kind")) === kind);
    });
    var flip = document.getElementById("flip");
    if (flip) flip.textContent = face === "front" ? "Ver reverso" : "Ver frente";
  }

  document.querySelectorAll("[data-kind]").forEach(function (b) {
    b.addEventListener("click", function () {
      kind = Number(b.getAttribute("data-kind"));
      render();
    });
  });
  document.getElementById("flip").addEventListener("click", function () {
    face = face === "front" ? "back" : "front";
    render();
  });
  ["para", "de", "mensaje", "fecha"].forEach(function (id) {
    var el = document.getElementById(id);
    el.addEventListener("input", function () {
      fields[id] = el.value;
      render();
    });
  });

  function download(which) {
    err.hidden = true;
    var node = which === "front" ? capFront : capBack;
    var name = "bono-" + kind + "-sesiones-" + (which === "front" ? "frente" : "reverso") + ".png";
    document.fonts.ready
      .then(function () {
        return htmlToImage.toPng(node.firstElementChild, {
          pixelRatio: 3,
          cacheBust: true,
          skipAutoScale: true,
        });
      })
      .then(function (url) {
        var a = document.createElement("a");
        a.href = url;
        a.download = name;
        a.click();
      })
      .catch(function () {
        err.hidden = false;
      });
  }

  document.getElementById("form-bono").addEventListener("submit", function (e) {
    e.preventDefault();
    download("front");
  });
  document.getElementById("dl-back").addEventListener("click", function () {
    download("back");
  });
  document.getElementById("print-btn").addEventListener("click", function () {
    window.print();
  });
  document.getElementById("wa-bono").addEventListener("click", function (e) {
    var para = fields.para ? " para " + fields.para : "";
    e.currentTarget.href =
      "https://wa.me/34648125035?text=" +
      encodeURIComponent("Hola Dra. Miriam, me gustaría adquirir el " + META[kind].title + para + ".");
  });

  render();
})();
