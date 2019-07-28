'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-28 20:00:11';
    this._versionBuild = 'jenkins-Bricolage-198';
    this._commitGIT = '68f77f45a79b2c5c0b24c8d482102503d28c16b2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}