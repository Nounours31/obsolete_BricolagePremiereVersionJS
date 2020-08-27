'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-27 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1779';
    this._commitGIT = 'c6a0e06b8ece3848463d6150f4dccb3977530d33';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}