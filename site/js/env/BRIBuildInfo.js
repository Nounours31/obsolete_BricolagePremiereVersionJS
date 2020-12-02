'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-02 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2168';
    this._commitGIT = '4a933d2c1d28f745ff708ff703633dde2c9be64f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}