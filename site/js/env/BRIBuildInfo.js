'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-27 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1537';
    this._commitGIT = 'd8b742e7606f917689fcd05d310e9812011147c2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}