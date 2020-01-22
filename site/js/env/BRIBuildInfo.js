'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-22 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-907';
    this._commitGIT = '3e9fad881c8d6617dc0b1015e8d9f808622f0309';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}