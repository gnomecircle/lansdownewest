import styled from 'styled-components';
import { bodyWidth, palette } from '../../data/siteTheming';

const { lansBeige, lansBeigeLight, lansGreen } = palette;

const Row = styled.div`
    display: flex;
	justify-content: ${props => props.center && 'center'};
	justify-content: ${props => props.between && 'space-between'};
    justify-content: ${props => props.right && 'flex-end'};
    align-items: ${props => props.vcenter && 'center'};
	flex-wrap: wrap;
    margin: 0 auto;
    padding: 0 1rem;
    min-width: 320px;
	max-width: ${bodyWidth};
`;

const Column = styled.div`
    display: ${props => props.flex && 'flex'};
    flex-direction: ${props => props.column && 'column'};
    flex: ${props => props.expand ? '1' : '0 100%'};
    padding: .5rem;

    @media only screen and (min-width: 900px) {
        flex: ${props => props.two && '0 50%'};
        flex: ${props => props.three && '0 33.3333333333%'};
        flex: ${props => props.four && '0 25%'};
        flex: ${props => props.six && '0 16.6666666667%'};
    }
`;

const StyledSidebar = Column.extend`
    background: ${lansBeige};
    padding: 0 24px 48px;
    h2 { color: ${lansBeigeLight}; }

    li {
        border-bottom: 1px solid ${lansGreen};
        display: flex;
        align-items: center;
        padding: 16px 0;
        svg {
            color: ${lansGreen};
            font-size: 22px;
            margin-right: 12px;
        }
        p {
            color: ${lansBeigeLight};
            font-size: 18px;
        }
    }
`;

export { Row, Column, StyledSidebar };