
import '../Style/Configuration/headerTwoStyle.css'
const HeaderTwo = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top" id="headerTwoDiv">
                <div class="container-fluid" id="alignItems">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item me-5">
                                <a class="nav-link active" aria-current="page" href="/">
                                <i class="bi bi-plus-circle"></i> Build
                                </a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link active" aria-current="page" href="/viewDetails">
                                    <i class="bi bi-eye"></i> Display
                                </a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link active" href="/auditFilter">
                                <i class="bi bi-file-text"></i> Logs</a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link active" href="/exceptionFilter">
                                <i class="bi bi-exclamation-circle"></i> Faults </a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link active" href="/replayDetails">
                                <i class="bi bi-arrow-repeat"></i> Replay</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default HeaderTwo;