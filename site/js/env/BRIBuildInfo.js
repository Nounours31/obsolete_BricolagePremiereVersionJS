'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-16 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1979';
    this._commitGIT = '14c02fee6fa8836ba4a679e040eed0b1f50819b4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}