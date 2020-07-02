'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-02 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1556';
    this._commitGIT = 'd49c889bf6572aaef816304d174ab3e4094afeb4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}