document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
        <header id="top">
            <nav class="navbar navbar-expand-xl  navbar-light bg-white shadow-sm">
                <div class="container-fluid px-md-5 px-2">
                    <a class="navbar-brand" href="index.html">
                        <img src="./public/CCSIP_English_Full Colour@2x.png" alt="Logo" class=" logo-img" />
                    </a>
                    
                    <button class="navbar-toggler border-0 focus-ring" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto mb-2 mb-xl-0 gap-3">
                            <li class="nav-item">
                                <a class="nav-link py-2 fw-bold " href="index.html">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link py-2 fw-bold" href="#">OUR TEAM</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link py-2 fw-bold" href="insights.html">INSIGHTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link py-2 fw-bold" href="beyond-research.html">BEYOND RESEARCH</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link py-2 fw-bold" href="common-room.html">THE COMMON ROOM</a>
                            </li>
                            <li class="nav-item  ">
                                <a class="nav-link py-2 fw-bold" href="#">FR</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
        <div class="offcanvas offcanvas-start w-75" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header justify-content-end">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1">
                    <li class="nav-item border-bottom border-gray-400">
                        <a class="nav-link py-3 px-4 fw-semibold" href="index.html">HOME</a>
                    </li>
                    <li class="nav-item border-bottom border-gray-400">
                        <a class="nav-link py-3 px-4 fw-semibold" href="#">OUR TEAM</a>
                    </li>
                    <li class="nav-item border-bottom border-gray-400">
                        <a class="nav-link py-3 px-4 fw-semibold" href="insights.html">INSIGHTS</a>
                    </li>
                    <li class="nav-item border-bottom border-gray-400">
                        <a class="nav-link py-3 px-4 fw-semibold" href="beyond-research.html">BEYOND RESEARCH</a>
                    </li>
                    <li class="nav-item border-bottom border-gray-400">
                        <a class="nav-link py-3 px-4 fw-semibold" href="common-room.html">THE COMMON ROOM</a>
                    </li>
                    <li class="nav-item border-bottom border-gray-400">
                        <a class="nav-link py-3 px-4 fw-semibold" href="#">FR</a>
                    </li>
                </ul>
            </div>
        </div>
    `;

    const footerHTML = `
        <footer class="bg-custom-footer container-fluid  bg-cover bg-center text-white pt-5">
            <div class="px-md-5 px-4">
                <div class="row g-md-5 g-2 pb-5 text-top">
                    <div class="col-md-4 p-0 mb-4 mb-md-0">
                    <div> <a href="index.html"><img src="./public/CCSIP_English_Dark BG@2x.png" alt="CCAC Logo" class="mb-4 img-fluid" /></a></div>
                    <div>
                       <ul class="list-unstyled d-flex gap-5">
                            <li class="fs-1"><a href="#" class="text-white"><i class="fa-brands fa-facebook"></i></a></li>
                            <li class="fs-1"><a href="#" class="text-white"><i class="fa-brands fa-instagram"></i></a></li>
                            <li class="fs-1"><a href="#" class="text-white"><i class="fa-brands fa-square-x-twitter"></i></a></li>
                            <li class="fs-1"><a href="#" class="text-white"><i class="fa-solid fa-globe"></i></a></li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-md-6 mb-4 p-0 mb-md-0 d-flex justify-content-start justify-content-md-center">
                        <ul class="list-unstyled space-y-4">
                            <li class="mb-3"><a href="index.html" class="text-white  footer-link-hover fs-3">Home</a></li>
                            <li class="mb-3"><a href="#" class="text-white  footer-link-hover fs-3">Our Team</a></li>
                            <li class="mb-3"><a href="insights.html" class="text-white  footer-link-hover fs-3">Insights</a></li>
                            <li class="mb-3"><a href="beyond-research.html" class="text-white footer-link-hover fs-3">Beyond Research</a></li>
                            <li class="mb-3"><a href="common-room.html" class="text-white footer-link-hover fs-3">The Common Room</a></li>
                            <li><a href="#" class="text-white  footer-link-hover fs-3">Contact</a></li>
                        </ul>
                    </div>   
                    <div class="col-md-2 mb-4 mb-md-0 p-0">                      
                       <h3><a class="text-white" href="#top">Top^</a></h3>
                    </div>                   
                </div>
            </div>           
        </footer>
    `;

    // Get the placeholder elements
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Insert the header and footer HTML into the DOM
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
