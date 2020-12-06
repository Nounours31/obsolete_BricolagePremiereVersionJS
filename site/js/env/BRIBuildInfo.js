'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-06 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2184';
    this._commitGIT = '9fd95bf3b22be6032240a0b27becbe03e4c08c89';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}