'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-11 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2083';
    this._commitGIT = 'a4f49e5107a73590efe498fa5230cf5af43385db';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}