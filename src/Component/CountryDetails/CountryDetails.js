import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './CountryDetails.css';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const CountryDetails = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const { alpha2Code } = useParams();
    const [details, setDetails] = useState({});
    console.log(details);
    const {
        name,
        alpha3Code,
        area,
        flag,
        population,
        timezones,
        nativeName,
        region,
        subregion,
    } = details;
    console.log(name);
    // const { name } = details.country;
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${alpha2Code}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDetails(data[0]));
    }, [alpha2Code]);

    const history = useHistory();
    function homeClick() {
        history.push('/home');
    }

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    className="details"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    <div align="center">
                        <div className="image">
                            <img src={flag} alt="" />
                        </div>
                        <h3>Name : {name}</h3>
                        <h5>Code : {alpha3Code}</h5>
                        <h5>Area : {area}</h5>
                        <h5>Population : {population}</h5>
                        <h5>Time Zone : {timezones}</h5>
                        <h5>Native Name : {nativeName}</h5>
                        <h5> Region :{region}</h5>
                        <h5>Sub Region : {subregion}</h5>
                    </div>
                </Alert>
            </Collapse>
            <Button
                disabled={open}
                variant="outlined"
                onClick={() => {
                    setOpen(true);
                }}
            >
                Re-open
            </Button>
            <br />
            <Button onClick={() => homeClick()} variant="contained" color="primary">
                {' '}
                Back
            </Button>
        </div>
    );
};

export default CountryDetails;
