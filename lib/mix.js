function mix(superclass, ...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), superclass);
}

module.exports = {
    mix,
};