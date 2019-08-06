'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-06 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-231';
    this._commitGIT = '54aa9b15c6bee1b051e95dfa4a979cfd03d16894';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}