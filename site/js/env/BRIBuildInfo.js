'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-18 12:00:03';
    this._versionBuild = 'jenkins-Bricolage-280';
    this._commitGIT = '4a330087ad2803d67fd23d1afa38b5726831aa19';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}