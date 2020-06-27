'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-27 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1536';
    this._commitGIT = '9d62b2cfe1b4c854d3f98225a8c2c479ee0145e4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}