'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-14 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2098';
    this._commitGIT = 'b29fc33152d8e4d4a00104d78061f76ad5e53e90';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}