'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-13 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-137';
    this._commitGIT = '6678cab468fe64692b98d5a5c9fd5049596cdcd2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}