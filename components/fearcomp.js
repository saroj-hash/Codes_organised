
import { Link } from "react-router-dom"
import React, { Fragment } from "react"
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
                                <Button size="large" onClick={() => this.setState({ thehappinessmatracomp: true })}  component={Link} to="/blogs/thehappinessmantra">
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

                                <Button size="large" onClick={() => this.setState({ sizecomp: true })}component={Link} to="/blogs/doessizedefinepoewer">
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
                                    Fear
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">

                                    An illusion created in mind which stops life, a lie that holds back almost everything. 
                                    This is an emotion that causes physiological changes which are later reflected in behavioral changes.
                                    Among all fears, the greatest is facing fear.<br/>
                                   
                                    Neither a fear gene exists that can be inherited nor we are taught how to fear.
                                    Then how do we learn to fear?
                                    A blanket of bad experiences caused by failures in our mind.
                                    But this blanket does not exist in reality. Fed the fear and you are dead.
                                    Fear has the capability of killing dreams and restricting us to dream further. 
                                    It gives birth to a hell lot of negative thought.
                                    Higher the level of fear higher will be the level of self-doubt and 
                                    this finally this will turn into an addiction. 
                                    This shit can be so strong that it can question your existence and then you are dead 
                                    just waiting to be buried.
                                    We all have different kinds of fear, when I was a kid I had fear of injections, darkness, speed, 
                                    thrill rides in amusement parks. 
                                    Fear of injection, realized this when I was 8. I would make excuses, vomit forcefully,
                                    run away, pretend as if I am cured and I don't need an injection. 
                                    As a kid, I never tried to overcome that and then at the age of 17 I got my first tattoo,
                                    18 another, 19 one more and at 21, four more of it and now I love getting inked.<br/>
                                    Fear of darkness didn't stay long. Getting over speed was not so tough, 
                                    just hit the speed you fear(with proper riding gears)and it will be gone
                                    and the same happened with rides in parks too.<br/><br/>
                                    Overcoming fear has one rule, just do it and once it's done the fear goes away. 
                                    The satisfaction received will be priceless. 
                                    The more you overcome fear the more you will be confident to overcome other fears.<br/>
                                    A lot of people have a fear of being left alone. But it's nothing but an illusion. 
                                    Trust yourself, you are self-sufficient and you need yourself more than you need anybody.
                                    Fearing at things steals the ability to accomplish it. 
                                    It's ok to fail but not to fear. Success and failure can be determined by our actions 
                                    but fear will stop taking actions. Understand that the 'restriction of can't' is self-made 
                                    and you can overcome it by yourself. 
                                    Just face it. Nothing is unachievable, the only thing that makes it so is your fear towards it.<br/>
                                    Do not let fear make you feel small. Do not be a slave of your fear.
                                    Take that adventure, hit that speed, face that person, do everything that is your fear and 
                                    you will end up turning them into your power.
                                    Be intrepid and you can accomplish anything you aspire for.<br/><br/>
                                    "We are all gonna die. The only question's how." –Point Break
                            </Typography>
                            <br />
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