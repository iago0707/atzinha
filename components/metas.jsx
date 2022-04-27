import Artigos from "./artigos";

export default function Metas(){
    return(
        <>
    <section id="metas" className="grid-one main-bg section">
        <div className="main-content grid-one-content">
            <h2 className="grid-main-heading">Metas</h2>
            <div className="grid">
                <Artigos texto="Até 2030, assegurar o acesso universal, confiável, moderno e a preços acessíveis a serviços de energia"></Artigos>
                <Artigos texto="Até 2030, aumentar substancialmente a participação de energias renováveis na matriz energética global"></Artigos>
                <Artigos texto="Até 2030, dobrar a taxa global de melhoria da eficiência energética"></Artigos>
                <Artigos texto="Até 2030, reforçar a cooperação internacional para facilitar o acesso a pesquisa e tecnologias de energia limpa, incluindo energias renováveis, eficiência energética e tecnologias de combustíveis fósseis avançadas e mais limpas, e promover o investimento em infraestrutura de energia e em tecnologias de energia limpa"></Artigos>
                <Artigos texto="Até 2030, expandir a infraestrutura e modernizar a tecnologia para o fornecimento de serviços de energia modernos e sustentáveis para todos nos países em desenvolvimento, particularmente nos países menos desenvolvidos, nos pequenos Estados insulares em desenvolvimento e nos países em desenvolvimento sem litoral, de acordo com seus respectivos programas de apoio"></Artigos>
            </div>
        </div>
    </section>
        </>
    )
}