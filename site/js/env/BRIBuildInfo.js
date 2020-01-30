'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-30 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-942';
    this._commitGIT = '89a468cb976f1ac36e20cf0a1062c46bf4c441ca';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}