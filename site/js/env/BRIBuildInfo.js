'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-05 16:00:15';
    this._versionBuild = 'jenkins-Bricolage-229';
    this._commitGIT = 'cc12bfdfb0eca6e1db049131946908be2b74ce1a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}