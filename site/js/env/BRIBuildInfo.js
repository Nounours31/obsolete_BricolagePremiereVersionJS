'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-28 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1908';
    this._commitGIT = '502d68b835db18d8774ffd5a6215c32ee95e461c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}