The layout directory contains one or more components which act as a layout or are parts of a layout such as a Header, Nav, Footer, etc. and have a:
<router-outlet></router-outlet>

By convention the app.component.html in the app module acts as the top level layout for the entire application. From this top level you may embed other layouts which in turn embed other components.