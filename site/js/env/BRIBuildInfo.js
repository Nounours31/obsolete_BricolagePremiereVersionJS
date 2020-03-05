'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-05 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1082';
    this._commitGIT = 'a60215a35ed6011b6f7ba7597b87d8b22ce821d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}