import gsap from "gsap";

class Text {
  // for transform translateY in %
  states = {
    hidden: 120,
    visible: -20,
    pressed: -140,
  };

  available = undefined;
  state = undefined;
  button = undefined;

  constructor(name) {
    this.available = true;
    this.state = this.states.hidden;
    this.button = document.querySelector(name);
    this.button.style.transform = `translateY(${this.state}%)`;
  }

  toVisible() {
    this.available = true;
    let value = {
      state: this.states.hidden,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.visible,
      ease: "power1.easeOut",
      delay: 0.7,
      onUpdate: function () {
        if (that.available) {
          that.state = this.targets()[0].state;
          that.button.style.transform = `translateY(${
            this.targets()[0].state
          }%)`;
        } else {
          this.kill();
        }
      },
    });
  }

  toPressed() {
    let value = {
      state: this.state,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.pressed,
      ease: "power1.easeOut",
      onStart: function () {
        that.available = false;
      },
      onUpdate: function () {
        that.state = this.targets()[0].state;
        that.button.style.transform = `translateY(${this.targets()[0].state}%)`;
      },
    });
  }

  toHidden() {
    let value = {
      state: this.state,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.hidden,
      ease: "power1.easeOut",
      onStart: function () {
        that.available = false;
      },
      onUpdate: function () {
        that.state = this.targets()[0].state;
        that.button.style.transform = `translateY(${this.targets()[0].state}%)`;
      },
    });
  }
}

class Line {
  states = {
    top: -100,
    middle: 0,
    bottom: 100,
  };

  available = undefined;
  state = undefined;
  line = undefined;

  constructor(name) {
    this.available = true;
    this.state = this.states.top;
    this.line = document.querySelector(name);
    this.line.style.transform = `translateY(${this.state}%)`;
  }

  fromTop() {
    this.available = true;
    let value = {
      state: this.states.top,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.middle,
      ease: "power1.easeOut",
      delay: 0.7,
      onUpdate: function () {
        if (that.available) {
          that.state = this.targets()[0].state;
          that.line.style.transform = `translateY(${this.targets()[0].state}%)`;
        } else {
          this.kill();
        }
      },
    });
  }

  fromBottom() {
    this.available = true;
    let value = {
      state: this.states.bottom,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.middle,
      ease: "power1.easeOut",
      delay: 0.7,
      onUpdate: function () {
        if (that.available) {
          that.state = this.targets()[0].state;
          that.line.style.transform = `translateY(${this.targets()[0].state}%)`;
        } else {
          this.kill();
        }
      },
    });
  }

  toTop() {
    let value = {
      state: this.state,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.top,
      ease: "power1.easeOut",
      onStart: function () {
        that.available = false;
      },
      onUpdate: function () {
        that.state = this.targets()[0].state;
        that.line.style.transform = `translateY(${this.targets()[0].state}%)`;
      },
    });
  }

  toBottom() {
    let value = {
      state: this.state,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.bottom,
      ease: "power1.easeOut",
      onStart: function () {
        that.available = false;
      },
      onUpdate: function () {
        that.state = this.targets()[0].state;
        that.line.style.transform = `translateY(${this.targets()[0].state}%)`;
      },
    });
  }
}

class Icon {
  states = {
    top: -100,
    middle: 0,
    bottom: 100,
  };

  available = undefined;
  state = undefined;
  icon = undefined;

  constructor(name) {
    this.available = true;
    this.state = this.states.top;
    this.icon = document.querySelector(name);
    this.icon.style.transform = `translateY(${this.state}%)`;
  }

  fromTop() {
    this.available = true;
    let value = {
      state: this.states.top,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.middle,
      ease: "power1.easeOut",
      delay: 0.7,
      onUpdate: function () {
        if (that.available) {
          that.state = this.targets()[0].state;
          that.icon.style.transform = `translateY(${this.targets()[0].state}%)`;
        } else {
          this.kill();
        }
      },
    });
  }

  fromBottom() {
    this.available = true;
    let value = {
      state: this.states.bottom,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.middle,
      ease: "power1.easeOut",
      delay: 0.7,
      onUpdate: function () {
        if (that.available) {
          that.state = this.targets()[0].state;
          that.icon.style.transform = `translateY(${this.targets()[0].state}%)`;
        } else {
          this.kill();
        }
      },
    });
  }

  toTop() {
    let value = {
      state: this.state,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.top,
      ease: "power1.easeOut",
      onStart: function () {
        that.available = false;
      },
      onUpdate: function () {
        that.state = this.targets()[0].state;
        that.icon.style.transform = `translateY(${this.targets()[0].state}%)`;
      },
    });
  }

  toBottom() {
    let value = {
      state: this.state,
    };
    let that = this;

    gsap.to(value, 0.7, {
      state: that.states.bottom,
      ease: "power1.easeOut",
      onStart: function () {
        that.available = false;
      },
      onUpdate: function () {
        that.state = this.targets()[0].state;
        that.icon.style.transform = `translateY(${this.targets()[0].state}%)`;
      },
    });
  }
}

class Case {
  case = undefined;
  listViewer = undefined;
  images = [];
  idx = 0;

  constructor(id) {
    this.case = document.getElementById(id);
    this.images = this.case.querySelectorAll(".case-img-container");
    console.log(this.images);
  }

  openCase() {
    this.openImages();
  }

  closeCase() {
    this.closeImages();
  }

  openImages() {
    const value = {
      top: 100,
      translateY: 0,
    };

    const that = this;

    gsap.to(value, 0.5, {
      top: 50,
      translateY: -50,
      ease: "power1.easeOut",
      onUpdate: function () {
        that.images[that.idx].style.top = `${this.targets()[0].top}%`;
        that.images[that.idx].style.transform = `translate(-50%, ${
          this.targets()[0].translateY
        }%)`;
      },
    });
  }

  closeImages() {
    const value = {
      top: 50,
      translateY: -50,
    };

    const that = this;

    gsap.to(value, 0.4, {
      top: 100,
      translateY: 10,
      ease: "power1.easeOut",
      onUpdate: function () {
        that.images[that.idx].style.top = `${this.targets()[0].top}%`;
        that.images[that.idx].style.transform = `translate(-50%, ${
          this.targets()[0].translateY
        }%)`;
      },
    });
  }
}

export { Case, Text, Line, Icon };
