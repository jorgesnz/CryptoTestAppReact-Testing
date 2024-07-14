// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// components
import ScrollContainer from '@components/ScrollContainer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

// utils
import PropTypes from 'prop-types';

// hooks
import useMeasure from 'react-use-measure';

const StyledAccordion = styled(Accordion)`
  background-color: transparent !important;
  box-shadow: none !important;
  margin: 0 !important;

  &:not(:last-child) {
    border-bottom: 1px solid ${theme('theme', {
      light: 'var(--border-light)',
      dark: 'var(--border-dark)',
    })};
  }
  
  .track {
    height: 120px;

    @media screen and (min-width: 414px) {
        height: 150px;
    }
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 16px !important;
  min-height: unset !important;

  .MuiAccordionSummary-content {
    margin: 0 !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon {
    width: 7px;
    will-change: transform;
    color: ${theme('theme', {
      light: 'var(--text-light)',
      dark: 'var(--text-dark)',
    })};
    transition: all var(--transition);
  }

  &.Mui-expanded .icon {
    transform: rotate(180deg);
    color: ${theme('theme', {
      light: 'var(--green)',
      dark: 'var(--accent)',
    })};
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  color: ${theme('theme', {
    light: 'var(--text-light)',
    dark: 'var(--text-dark)',
  })};
  padding-top: 0 !important;
`;

const Collapse = ({children, title, id, expanded, handleChange}) => {
    const [ref, {height}] = useMeasure();

    return (
        <StyledAccordion expanded={expanded === id} onChange={handleChange(id)}>
            <StyledAccordionSummary ref={ref}>
                <h4>{title}</h4>
                <i className="icon icon-chevron-down"/>
            </StyledAccordionSummary>
            <ScrollContainer height={height} bg="widget-bg" isCompact>
                <div className="track">
                    <StyledAccordionDetails>{children}</StyledAccordionDetails>
                </div>
            </ScrollContainer>
        </StyledAccordion>
    );
}

Collapse.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    expanded: PropTypes.any.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default Collapse