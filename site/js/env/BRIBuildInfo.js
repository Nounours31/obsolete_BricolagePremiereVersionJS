'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-10 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1711';
    this._commitGIT = 'd8e30088019b71f9d2bce40d288aabdd12624167';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}