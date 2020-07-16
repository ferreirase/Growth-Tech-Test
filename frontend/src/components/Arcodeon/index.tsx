/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ContainerAcordeon } from './styles';

interface AccordionProps {
  title?: string;
  post?: string;
  user?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

const AccordionComponent: React.FC<AccordionProps> = ({
  title,
  post,
  user,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean,
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ContainerAcordeon style={{ marginTop: '7px', marginBottom: '15px' }}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            <b>
              <small>Usuário: </small>
            </b>
            {user}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            <b>
              <small>Título: </small>
            </b>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <i>{post}</i>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </ContainerAcordeon>
  );
};

export default AccordionComponent;
