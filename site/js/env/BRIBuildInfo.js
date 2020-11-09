'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-09 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-2077';
    this._commitGIT = '177d2d9530ee18443a57538cd26829a477fc13ea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}