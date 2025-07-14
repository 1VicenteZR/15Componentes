# 📦 ProjectMaterial - Aplicación Angular

Este proyecto es una aplicación web desarrollada con Angular 20, generada con Angular CLI. Incluye funcionalidades modernas como búsqueda dinámica, consumo de APIs externas y visualización de resultados en tablas o tarjetas.

---

---

## 🧑‍💻 Capturas de pantalla

<img width="2158" height="1250" alt="image" src="https://github.com/user-attachments/assets/da30542e-56a2-41b0-8d23-0a3e7da059ea" />
<img width="2159" height="1254" alt="image" src="https://github.com/user-attachments/assets/1fd81d1c-b039-4aaf-82eb-4b7c64b2ce9b" />

---


```markdown
![Inicio](screenshots/inicio.png)
![Búsqueda](screenshots/busqueda.png)
```

---

## 🚀 Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/projectmaterial.git
cd projectmaterial
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Ejecuta el servidor de desarrollo

```bash
ng serve
```

Accede a la app desde tu navegador en:  
[http://localhost:4200](http://localhost:4200)

---

## 💻 Estructura del Proyecto

```plaintext
projectmaterial/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   └── index.html
├── angular.json
├── package.json
└── README.md
```

---

## 🔍 Ejemplo de Código

### 📦 Servicio para consultar Pokémon (`pokemon.service.ts`)

```ts
getPokemon(nombre: string): Observable<any> {
  const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
  return this.http.get<any>(url);
}
```

### 🔍 Buscar desde el componente (`busqueda.component.ts`)

```ts
buscarPokemon() {
  if (this.nombre.trim() !== '') {
    this.pokemonService.getPokemon(this.nombre).subscribe(data => {
      this.pokemon = data;
    });
  }
}
```

### 🎨 Mostrar resultados (`busqueda.component.html`)

```html
<div *ngIf="pokemon">
  <h3>{{ pokemon.name | titlecase }}</h3>
  <img [src]="pokemon.sprites.front_default" alt="Pokémon">
  <p>Peso: {{ pokemon.weight }} | Altura: {{ pokemon.height }}</p>
</div>
```

---

## 🛠️ Comandos Útiles

- **Crear componente:**
  ```bash
  ng generate component nombre-componente
  ```
- **Construir para producción:**
  ```bash
  ng build --configuration production
  ```

---

## ✅ Requisitos

- Node.js 18+
- Angular CLI 20.0+
- Navegador moderno (Chrome, Edge, Firefox)

---

## 🧑‍💻 Autor

Vicente de Jesús Zenón Regalado  
📧 [vicenteregalado11@hotmail.com](mailto:vicenteregalado11@hotmail.com)  
📸 [Instagram: @vicentevx7](https://instagram.com/vicentevx7)

---

## 📄 Licencia

Este proyecto es de uso libre para fines académicos y de aprendizaje. Si lo reutilizas, se agradece la mención del autor
