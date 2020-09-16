'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-16 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1859';
    this._commitGIT = '77908cdfe9a0cc079dc0afdf8a8ca9c6a864d3c2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}