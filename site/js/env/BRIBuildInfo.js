'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-26 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2143';
    this._commitGIT = 'b154df4203ad59d5a9edf0a4f300535a231fc31c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}