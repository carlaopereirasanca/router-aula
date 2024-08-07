
import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

// Vamos passar para este componente, via props,
// o texto a ser exibido (children), e um atributo 'to'.
// Já vamos 'desestruturar' esses itens aqui no recebimento
// dos parâmetros da função:

export default function MenuLink( {children, to} ) {

    // Recupera o endereço atual sendo exibido:
	const loc = useLocation();

	return (

        <Link className={`
            ${styles.link}
            ${loc.pathname === to ? styles.linkDestacado : ""}
        `} to={to}>
            {children}
        </Link>

	)
}

