'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-23 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1397';
    this._commitGIT = 'f251092702a5317b71b5fa02b5c4fa3948e72b50';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}