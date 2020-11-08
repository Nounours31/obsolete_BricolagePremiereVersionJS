'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-08 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2072';
    this._commitGIT = '4064c13d605be9d439609570f057956ebf547098';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}