'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-16 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1126';
    this._commitGIT = '56192e22327f3b6767d39f3bd8fd423d94f42907';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}