'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-13 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-1237';
    this._commitGIT = '9728e1935cccae3561bd860d85189e3bd34276d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}