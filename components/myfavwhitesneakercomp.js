
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
                                My favorite white sneaker
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Have you ever imagined how important shoes are? 
                                Shoes are as a staple of any outfit.
                                Especially, my white sneakers, whatever clothes I put on my sneaker has never disappointed me.
                                This time it added life lessons to my life too.<br/>
                                I bought a new white sneaker, still remember the day when I wore it for the first time,
                                scratched denim jeans, a black t-shirt, and the new sneaker.
                                It looked good but it was not so comfortable to walk.
                                For the first time, I was disappointed with Adidas. 
                                But then I continued with my work. 
                                Every day I get ready I think of wearing some other shoes but I end up wearing the new one. 
                                Days passed, it started treating me well, I was more comfortable with it. 
                                And after a point, it turned out to be the most comfortable pair of sneakers. 
                                So the lesson here is, the start might not be easy, but gradually when we start walking it will be. 
                                All we need to do is put on a kick-ass outfit and bust out favorite sneakers and start walking.<br></br>
                         
                                A peron's character is far more important than what his/her money can buy. 
                                Owing a pair of Nike Air VaporMax 360 or a pair of Air Jordan 4 Retro SE or
                                an ISPA Air Max 720 doesn't make you any better than a man with a Vans Old Skool or
                                a Converse Chuck Taylor All Star Slip. All of them serve the same purpose.
                                No matter how much money we have, we all are equal as human beings.<br/>

                                Some sneakers aren't so good to see. But then LiteRide Pacer from Crocs proved me wrong.
                                Though it's look was not so eye-catching but it is very versatile and comfortable. 
                                So prejudging the worth of something by its outward appearance is wrong.<br/> <br/>

                                Sneakers are so sedulous, neither they give up easily nor they betray their owners.
                                No matter how much the owner may weigh they serve and never complain about it. 
                                
                                Apart from these things shoes teach more, like never change your partner, stay together.
                                No matter how dirty shoes are, once cleaned looks good again.<br/><br/>
                                Dream chasers wear sneakers. <br/>
                                Love them, put on your favorite one and chase your dream.

                        

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