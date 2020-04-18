import React, { Fragment } from "react"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import Footercomp from "./footercomp"
import Blogs from "./blogs"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "@material-ui/core/Card"
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Continueblog1 from "./comp1"
import Comment from "./comment"
import IconButton from "@material-ui/core/IconButton"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BBadge from "react-bootstrap/Badge"
import Badge from "@material-ui/core/Badge"
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Thisshalltoopasscomp from "./thisshalltoopasscomp"
import Autumncomp from "./autumncomp"
import Deardadcomp from "./deardadcomp"
import Dearrachelcomp from "./dearrachelcomp"
import Dearfriendscomp from "./dearfriendscomp"
import Fearcomp from "./fearcomp"
import Thehappinessmantracomp from "./thehappinessmatracomp"
import Lifecomp from "./lifecomp"
import Myfavwhitesneakercomp from "./myfavwhitesneakercomp"
import Thequarantinemantracomp from "./thequarantinemantracomp"
import Selflovecomp from "./selflovecomp"
import Sizecomp from "./sizecomp"
import Choicescomp from "./choicescomp"
import Turnrightcomp from "./turnrightcomp"
import Icantdoitcomp from "./icantdoitcomp"
export default class Comp2 extends React.Component {
    state = {
        goback: false,
        root: {
            maxWidth: 1400
        },
        viewComment: false,
        color: "light",
        badgeContent: 0,
        likeclick: true,
        showMenu: false,
        contentCol: "col-md-12",
        hidden: "",
        thisshalltoopasscomp: false,
        autumncomp: false,
        deardadcomp: false,
        dearrachelcomp: false,
        dearfriendscomp: false,
        fearcomp: false,
        thehappinessmatracomp: false,
        lifecomp: false,
        myfavwhitesneakercomp: false,
        thequarantinemantracomp: false,
        selflovecomp: false,
        sizecomp: false,
        choicescomp: false,
        turnrightcomp: false,
        icantdoitcomp: false
    }
    handleLike = () => {
        this.setState({ likeclick: !this.state.likeclick })
        if (this.state.likeclick) {
            this.setState({
                color: "dark",
                badgeContent: this.state.badgeContent + 1
            })
        }
        else {
            this.setState({
                color: "light",
                badgeContent: this.state.badgeContent - 1
            })
        }
    }
    handleMenu = () => {
        this.setState({
            showMenu: true,
            hidden: "hidden",
            contentCol: "col-md-12"
        })
    }
    handleClose = () => {
        this.setState({
            showMenu: false,
            hidden: "",
            contentCol: "col-md-12"
        })
    }
    render() {
        if (this.state.goback) return <Blogs />
        if (this.state.thisshalltoopasscomp) return <Thisshalltoopasscomp />
        if (this.state.autumncomp) return <Autumncomp />
        if (this.state.deardadcomp) return <Deardadcomp />
        if (this.state.dearrachelcomp) return <Dearrachelcomp />
        if (this.state.dearfriendscomp) return <Dearfriendscomp />
        if (this.state.fearcomp) return <Fearcomp />
        if (this.state.thehappinessmatracomp) return <Thehappinessmantracomp />
        if (this.state.lifecomp) return <Lifecomp />
        if (this.state.myfavwhitesneakercomp) return <Myfavwhitesneakercomp />
        if (this.state.thequarantinemantracomp) return <Thequarantinemantracomp />
        if (this.state.selflovecomp) return <Selflovecomp />
        if (this.state.sizecomp) return <Sizecomp />
        if (this.state.choicescomp) return <Choicescomp />
        if (this.state.turnrightcomp) return <Turnrightcomp />
        if (this.state.icantdoitcomp) return <Icantdoitcomp />
        return <Fragment>


            <div className="offset-md-2 col-md-8 offset-md-2">
                {
                    this.state.showMenu ?
                        <Card className="col-md-12">
                            <CardContent>
                                <IconButton className="float-right" onClick={this.handleClose} >
                                    <BBadge pill variant="dark">
                                        <CancelPresentationIcon />
                                    </BBadge>
                                </IconButton>
                                <br /><br />

                                <Typography variant="h3" component="h3" className="text-center">
                                    <BBadge pill variant="dark"> CONTENTS </BBadge>
                                </Typography>

                                <br />
                                <Button size="large" onClick={() => this.setState({ thisshalltoopasscomp: !this.state.thisshalltoopasscomp })} component={Link} to="/blogs/thisshalltoopass" >
                                    <h5>
                                        <BBadge pill variant="dark">
                                            This shall too pass
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ autumncomp: true })} component={Link} to="/blogs/autumn">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Autumn
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ deardadcomp: true })} component={Link} to="/blogs/deardad" >
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Dear Dad,
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ dearrachelcomp: true })} component={Link} to="/blogs/dearrachel">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Dear Rachel,
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ dearfriendscomp: true })} component={Link} to="/blogs/dearfriends">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Dear "Friends"
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ fearcomp: true })} component={Link} to="/blogs/fear">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Fear
                                    </BBadge>
                                    </h5>
                                </Button>
                                <Button size="large" onClick={() => this.setState({ thehappinessmatracomp: true })} component={Link} to="/blogs/thehappinessmantra">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            The Happiness Mantra
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ lifecomp: true })} component={Link} to="/blogs/life">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            LIFE
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ myfavwhitesneakercomp: true })} component={Link} to="/blogs/myfavwhitesneaker">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            My Favorite white sneaker
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ thequarantinemantracomp: true })} component={Link} to="/blogs/thequarantinemantra">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            The Quarantine Mantra
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ selflovecomp: true })} component={Link} to="/blogs/selflove">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Self Love
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ sizecomp: true })} component={Link} to="/blogs/doessizedefinepoewer">
                                    <h5>
                                        <BBadge pill variant="dark" >
                                            Does size defines power?
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ choicescomp: true })} component={Link} to="/blogs/choices">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Choices
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large">
                                    <h5>
                                        <BBadge pill variant="dark" onClick={() => this.setState({ turnrightcomp: true })} component={Link} to="/blogs/turnright">
                                            Turn Right
                                     </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ icantdoitcomp: true })} component={Link} to="/blogs/icantdoit">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            I can't do it
                                    </BBadge>
                                    </h5>
                                </Button>
                            </CardContent>
                            <br />
                        </Card>
                        :
                        <div />

                }
                <br />
                <Card style={this.state.root} className={this.state.contentCol}>
                    <CardActionArea>
                        <CardContent>
                            <IconButton hidden={this.state.hidden} onClick={this.handleMenu}>
                                <BBadge pill variant="dark">
                                    <MenuOpenIcon />
                                </BBadge>
                            </IconButton>
                            <br />
                            <Typography gutterBottom variant="h5" component="h2">
                                This shall too pass
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Yes! This shall too pass. So what, if you cry your eyes out, this shall too pass.<br/>
                                So what, if things will never be the same, this shall too pass. <br/>
                                So what, if you get crippling depression, this shall too pass.<br/>
                                So what, if you start to lose yourself and become this person,<br/>you have hated from the very beginning, this shall too pass.<br/>
                                So what, you start drinking which you have always despised,this shall too pass.<br/>
                                So what, if you start choking up on your vomit, this shall too pass.<br/>
                                So what, if you get into those nice little white pills<br/> that let you off the pain for a moment,
                                this shall too pass.<br/> So what, if you OD on those pills that are in your back pocket, <br/>
                                which you are popping every hour, yes, this shall too pass. <br/>
                                So what, if you find yourself as an embarrassment on your family,
                                this shall too pass.<br/> 
                                So what, if you start living as a hobo behind a garbage bin<br/> and get morbidly rashed with all those good old flea bites, 
                                this shall too pass.<br/>
                                So what, you are hungry and finally give up on the tiniest self-esteem you are
                                left with and <br/>start digging for all those delicious leftovers in the garbage bin, 
                                this shall too pass. <br/>
                                So what, you get kidney stones by eating crap from the garbage bin,
                                yes this shall too pass,<br/> maybe in your urine someday leaving you in excruciating pain.
                                But yes, this shall too pass.<br/> So what, if you finally give up and jump in front of the speeding bus <br/>which
                                wasn't supposed to stop at your bus bay, <br/>leaving your family with absolutely nothing but regrets,
                                this shall too pass.<br/>
                                Yes! This shall too pass.<br/>
                                Well, this most certainly will not! <br/>
                                If you don't get your ass off that beautiful couch,
                                which,<br/> probbly would be reeking of your sweet little behind by now,<br/>
                                this most certainly will not.<br/>
                                Chaos will always stay.<br/> However deteriorated may your condition be,<br/>
                                you will just have to live with that. <br/>You will have to learn, how to make yourself happy again. <br/>
                                You will have to work on the recovery of your compromised self-esteem.<br/>
                                Believe me, when I confer, you will find happiness again. <br/>Needless to say, sometimes,
                                the greatest soul also needs cleansing.<br/>
                                You will get your first job.<br/> 
                                You will get a fellowship in your dream university.<br/>
                                You will find someone, who completes you. You will get married.<br/>
                                You will have beautiful kids. You will grow.<br/>
                                Well-cooked or not, the world, still, is your oyster.<br/>
                                Despite being stuck at its hard outer shell,<br/>
                                go find yourself beautiful pearls,<br/>
                                that everyone talks about.<br/>
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                -From a fellow miserably heartbroken loser ...
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                        <Button size="small" color="primary" onClick={() => this.setState({ goback: true })} component={Link} to="/blogs">
                            Back
                        </Button>


                        <Button size="small" color="primary" onClick={() => this.setState({ viewComment: !this.state.viewComment })}>
                            Comment
                            </Button>
                        <IconButton onClick={this.handleLike}>
                            <BBadge pill variant={this.state.color}>

                                <Badge badgeContent={this.state.badgeContent} color="primary">
                                    <FavoriteBorderIcon />
                                </Badge>
                            </BBadge>
                        </IconButton>
                    </CardActions>
                </Card>

                <br /><br />
                {
                    this.state.viewComment ?
                        <Comment /> :
                        <div></div>
                }

            </div>

            <div style={{ width: "100%" }}>
                <Footercomp />
            </div>
        </Fragment>
    }
}